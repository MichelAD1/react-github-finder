import React, { useState, useEffect } from "react";
import SearchInput from "../Components/SearchInput";
import SearchResults from "../Components/SearchResults";
import useSearchStore from "../Stores/SearchStores";
import Spinner from "../Components/Spinner";

const SearchGithub = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen dark">
      <SearchInput />
      {loading ? <Spinner /> : <SearchResults users={results} />}
    </div>
  );
};

export default SearchGithub;
