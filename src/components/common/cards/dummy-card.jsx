const DummyCard = ({ data }) => {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
        {/* <img
          className="w-full h-36 object-cover"
          src="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <div className="p-4">
          <h5 className="text-lg font-semibold">{data.title}</h5>
          <p className="text-sm text-gray-500 mt-2">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica.
          </p>
        </div>
        <div className="flex justify-between p-4">
          <button className="text-blue-500 text-sm">Share</button>
          <button className="text-blue-500 text-sm">Learn More</button>
        </div>
      </div>
    );
  };
  
  export default DummyCard;
  