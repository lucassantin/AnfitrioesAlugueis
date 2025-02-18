# Usar a imagem oficial do Python
FROM python:3.9-slim

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar requirements.txt e instalar dependências
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo o código fonte
COPY . .

# Expor a porta que a API vai rodar
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["python", "app.py"]
