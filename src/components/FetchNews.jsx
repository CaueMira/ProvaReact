import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <h1>Notícias</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((noticia) => (
          <Card
            variant="outlined"
            style={{
              marginBottom: "1rem",
              textAlign: "left",
              padding: "1rem",
              borderRadius: "2rem",
            }}
            key={noticia.id}
          >
            <div>
              {/* <h2>{noticia.title}</h2> */}
              {/* <div>{noticia.body}</div> */}
              <h1>Vaga de emprego</h1>
              <p>Analista de Dados</p>
              <p>Analista de Banco de Dados</p>
              <p>Analista de Infraestrutura</p>

              <h1>Desligamentos</h1>
              <p>Jose Carlos dos Anjos Junior</p>
            </div>
          </Card>
          
        ))
      )}
    </div>
  );
};

export default FetchNews;
