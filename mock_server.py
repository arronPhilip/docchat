"""Run DocChat with a fake AI provider, to test the UI without any API key or quota.

    python mock_server.py            then open http://127.0.0.1:5001
    python mock_server.py --public   same, but as the public website (privacy + daily limits)
Uses its own database (mock.db) so it never touches your real chats.
"""

import json
import os
import sys
import time

os.environ["DOCCHAT_DB"] = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mock.db")
if "--public" in sys.argv:
    os.environ["DOCCHAT_PUBLIC"] = "1"
if "--auth" in sys.argv:  # show the sign-in screen (uses GOOGLE_CLIENT_ID from .env if set)
    os.environ.setdefault("GOOGLE_CLIENT_ID", "preview.apps.googleusercontent.com")
import app as docchat  # noqa: E402  (must come after DOCCHAT_DB is set)

SAMPLE = """Here's a summary of the **refund policy**:

* Refunds are allowed within **30 days** of purchase [refund-policy.txt]
* Items must be unused and in original packaging
* Refunds go back to the *original payment method*

1. Contact support with your order number
2. Ship the item back using the `RETURN-30` label

The document doesn't mention exchanges, so I can't say whether those are allowed.
[[FOLLOWUPS]]
Are sale items covered by the refund policy?
How long does a refund take to arrive?
Can I exchange an item instead of returning it?"""


def mock_stream(turns):
    words = SAMPLE.split(" ")
    for i, w in enumerate(words):
        time.sleep(0.03)
        yield {"type": "text", "text": w + ("" if i == len(words) - 1 else " ")}
        if i == 12:  # show what a Claude-style citation marker looks like
            yield {"type": "cite", "n": 1}
    yield {"type": "final", "raw": None, "citations": [
        {"title": "refund-policy.txt", "text": "Refunds are allowed within 30 days of purchase.", "where": "p. 1"}]}


def mock_json(docs, prompt):
    time.sleep(1.2)
    return json.dumps({
        "title": "Acme Store Refund Policy",
        "type": "Policy document",
        "summary": "Explains how and when customers can get their money back. Refunds are allowed within 30 days "
                   "for unused items, paid back to the original payment method within 5-7 business days.",
        "topics": ["Refund window", "Item condition", "Payment method", "Sale items", "Processing time"],
        "questions": ["How long do I have to request a refund?", "Are sale items refundable?",
                      "How long until the money comes back?", "What condition must items be in?"],
    })


docchat.PROVIDERS["mock"] = (mock_stream, mock_json)
docchat.PROVIDER = "mock"
docchat.PROVIDER_LABEL = "Mock AI (testing)"
docchat.init_db()

if __name__ == "__main__":
    docchat.app.run(host="127.0.0.1", port=5001, threaded=True)
