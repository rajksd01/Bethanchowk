//
import { useState } from "react";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  
  const data = [
    {
      id: 1,
      name: "Population",
      nepali_term: "जनसंख्या विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiOWE2NGI2OWYtNDFjYy00N2E0LTg3ZDYtZjczNWI5ZjM3MGQ5IiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 2,
      name: "Health",
      nepali_term: "स्वास्थ्य विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiYTdiZGUzYzEtOGI5MC00MDFkLThjODItZGNiYzM3NWE1MTY2IiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 3,
      name: "Infrastructure",
      nepali_term: "पूर्वाधार विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiZWM1YzFkNmMtMDViOS00M2JhLTk5YTEtMDJiOWUzMzJmN2IxIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 4,
      name: "Occupation",
      nepali_term: "पेशा विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiYmExZDE1NTEtYTcyMi00MTMzLWFkNDItYTkwY2RkNGVkYWY0IiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 5,
      name: "Education",
      nepali_term: "शिक्षा",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiMDliMzgzZTUtN2RjYi00ODMzLWI3Y2EtZmJhNzQyYzMzYzYzIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 6,
      name: "Financial",
      nepali_term: "आर्थिक विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiMjYxYmQwODktZDcyYy00YWQ4LTk0Y2EtYWZlODE5NDU3Y2ZjIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 7,
      name: "Waste and Sewage ",
      nepali_term: "फोहोर र ढल विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiYTc0YjI5ZDYtMTEzMC00YTdkLWIyYWQtNjFmZDAyMGJjNTZhIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 8,
      name: "Information, Training and Women Involvement ",
      nepali_term: "सूचना, तालिम र महिला सहभागिता",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiODczZjM4YTYtY2M0NC00ZDZiLWFjMzMtNWE4NTZkYTIyOGI4IiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 9,
      name: "Disaster and Risk Management ",
      nepali_term: "प्राकृतिक प्रकोप र जोखिम",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiNDQ5ZWNmOGQtMzI0My00ZWVkLWIyMzEtNTgxYmE2YWU0ODAwIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
    {
      id: 10,
      name: "Personal Details ",
      nepali_term: "व्यक्तिगत विवरण",
      iframe_src:
        "https://app.powerbi.com/view?r=eyJrIjoiZDViYTliMTAtMDQyYi00NzVlLTg5YTYtMjdhMGQyOTI3MTcyIiwidCI6IjQyYjY5MjNhLWZmMzUtNDY5Yy05YzZhLWZhNDkwY2M4YTY0MSJ9",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="m-2">
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item)}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 m-1 px-4 border border-gray-400 rounded shadow"
          >
            {item.nepali_term}
          </button>
        ))}
      </div>

      {selectedItem && (
        <iframe
          title="Report Section"
          width="100%"
          height="700"
          src={selectedItem.iframe_src}
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      )}
    </>
  );
}

export default Home;
