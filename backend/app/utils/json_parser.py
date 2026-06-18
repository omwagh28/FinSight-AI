# Path: backend/app/utils/json_parser.py

import json

def parse_json_response(
    text: str,
):
    text = text.strip()

    if text.startswith("```json"):
        text = text.replace(
            "```json",
            ""
        )

        text = text.replace(
            "```",
            ""
        )

    return json.loads(text)