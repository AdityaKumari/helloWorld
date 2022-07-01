import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";
function App() {
  const [content, setContent] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(15);
  const [isLoading, setLoading] = useState(true);
  async function fetchData() {
    const res = await axios.get(
      `https://dummyjson.com/products?skip=0&limit=${limit}`
    );
    console.log(res.data.products);
    setContent(res.data.products);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [limit]);
  const ScrollToEnd = () => {
    console.log("l" + limit);
    if (limit + 6 < 30) {
      setLimit(limit + 5);
    } else {
      setLimit(30);
    }
  };
  window.onscroll = () => {
    console.log("window scroll");
    console.log("innerheight" + window.innerHeight);
    console.log("window scrollto" + document.documentElement.scrollTop);
    console.log("window scrollend" + document.scrollingElement.scrollHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.scrollingElement.scrollHeight
    ) {
      console.log("window scroll end");
      ScrollToEnd();
    }
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      {content &&
        content.map((c) => (
          <Card key={c.id} id={c.id} title={c.title} image={c.images[0]}></Card>
        ))}
    </div>
  );
}

export default App;
