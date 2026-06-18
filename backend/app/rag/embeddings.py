from sentence_transformers import (
    SentenceTransformer
)

embedding_model = None

def get_embedding_model():
    global embedding_model

    if embedding_model is None:
        embedding_model = SentenceTransformer(
            "sentence-transformers/all-MiniLM-L6-v2"
        )

    return embedding_model


def embed_text(text: str):
    model = get_embedding_model()

    return model.encode(
        text,
        normalize_embeddings=True
    ).tolist()