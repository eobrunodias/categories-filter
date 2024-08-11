import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";

import { Sidebar } from "../../components/Sidebar";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { Container, Content } from "./styles";
import { Tag } from "../../components/Tag";

interface DataApi {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  description: string;
  tags: string[];
}

export function Home() {
  const [cards, setCards] = useState<DataApi[]>([]);

  useEffect(() => {
    const handleData = async () => {
      const url = `http://localhost:3000/photos`;
      const res = await fetch(url);
      const json = await res.json();

      setCards(json);
    };

    handleData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Search />
      <Content>
        {cards.map((card: DataApi) => {
          return (
            <Card
              key={card.id}
              thumb={card.url}
              title={card.title}
              description={card.description}
            >
              {card.tags.map((tag: string) => {
                return <Tag title={tag} key={card.id} />;
              })}
            </Card>
          );
        })}
      </Content>
      <DefaultLayout />
    </Container>
  );
}
