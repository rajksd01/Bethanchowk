import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="p-4 ">
        <Header />
      </div>
      <div className="m-2">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Button
        </button>
      </div>
    </>
  );
}

export default Home;
