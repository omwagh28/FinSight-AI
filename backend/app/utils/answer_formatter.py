import re


def format_answer(
    answer: str,
):
    if not answer:
        return ""

    answer = answer.replace(
        "**",
        ""
    )

    answer = re.sub(
        r"\n{3,}",
        "\n\n",
        answer,
    )

    return answer.strip()