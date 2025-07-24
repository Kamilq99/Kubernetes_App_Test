FROM python:3.9.23-bookworm

WORKDIR /backend

COPY main.py /backend/main.py

RUN pip install flask

EXPOSE 5000

CMD ["python", "main.py"]