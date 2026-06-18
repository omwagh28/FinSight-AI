RATING_MAP = {
    "excellent": 90,
    "strong": 80,
    "good": 70,
    "moderate": 60,
    "average": 60,
    "weak": 40,
    "poor": 20,
}


def calculate_dimension_scores(
    assessment: dict,
):
    return {
        key: RATING_MAP.get(
            str(value).lower(),
            50,
        )
        for key, value in assessment.items()
    }


def calculate_health_score(
    dimension_scores: dict,
):
    values = list(
        dimension_scores.values()
    )

    if not values:
        return 0

    return round(
        sum(values) / len(values)
    )