// // components/SearchAutocomplete.js
// import React, { useEffect, useRef, useState } from "react";
// import { InputGroup, FormControl } from "react-bootstrap";
// import { Autocomplete } from "mdb-ui-kit"; // Update the import path

// import "mdb-ui-kit/dist/css/mdb.min.css"; // Update the import path

// // The initMDB function is not needed in version 7.0.0

// const SearchAutocomplete = ({ data }) => {
//   const autoCompleteRef = useRef(null);
//   const [filteredData, setFilteredData] = useState([]);

//   const dataFilter = (value) => {
//     return data.filter((item) => {
//       return item.toLowerCase().startsWith(value.toLowerCase());
//     });
//   };

//   useEffect(() => {
//     if (autoCompleteRef.current) {
//       new Autocomplete(autoCompleteRef.current, {
//         data: dataFilter,
//       });
//     }
//   }, [dataFilter]);

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setFilteredData(dataFilter(inputValue));
//   };

//   return (
//     <div>
//       <InputGroup>
//         <div id="search-autocomplete" ref={autoCompleteRef} data-mdb-input-init>
//           <FormControl
//             type="search"
//             id="form1"
//             className="form-control"
//             onChange={handleInputChange}
//           />
//           <label className="form-label" htmlFor="form1">
//             Search
//           </label>
//         </div>
//       </InputGroup>
//       {/* Display filtered data */}
//       <ul>
//         {filteredData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchAutocomplete;
