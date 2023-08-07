import { useState } from "react"
import './App.css';

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{ item.question }</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question 1",
    answer:"国立研究開発法人宇宙航空研究開発機構（うちゅうこうくうけんきゅうかいはつきこう、英: Japan Aerospace Exploration Agency、略称: JAXA）は、日本の航空宇宙開発政策を担う国立研究開発法人。本部は東京都調布市にある。"
  },
  {
    question: "Question 2",
    answer:"国立研究開発法人宇宙航空研究開発機構（うちゅうこうくうけんきゅうかいはつきこう、英: Japan Aerospace Exploration Agency、略称: JAXA）は、日本の航空宇宙開発政策を担う国立研究開発法人。本部は東京都調布市にある。"
  },
  {
    question: "Question 3",
    answer:"国立研究開発法人宇宙航空研究開発機構（うちゅうこうくうけんきゅうかいはつきこう、英: Japan Aerospace Exploration Agency、略称: JAXA）は、日本の航空宇宙開発政策を担う国立研究開発法人。本部は東京都調布市にある。"
  }
]

export default App;
