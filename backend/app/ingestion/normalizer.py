import re


def normalize_markdown(
    text: str,
):
    text = re.sub(
        r"\n{3,}",
        "\n\n",
        text,
    )

    text = re.sub(
        r"[ \t]+",
        " ",
        text,
    )

    text = re.sub(
        r"Page\s+\d+",
        "",
        text,
        flags=re.IGNORECASE,
    )

    return text.strip()