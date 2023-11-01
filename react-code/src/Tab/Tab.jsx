import React, { useMemo, useState } from "react";
import styled from "styled-components";

const data = [
  {
    name: "Tab1",
    content: "tab1",
  },
  {
    name: "Tab2",
    content: "tab2",
  },
  {
    name: "Tab3",
    content: "tab3",
  },
  {
    name: "Tab2",
    content: "tab2",
  },
  {
    name: "Tab3",
    content: "tab3",
  },
  {
    name: "Tab4",
    content: "tab4",
  },
];

const Tab = () => {
  const [tabChange, setTabChange] = useState(data[0]);

  const uniqName = useMemo(() => {
    const tabName = data?.map((item) => item.name);
    const uniqName = [...new Set(tabName)];
    return uniqName;
  }, [data]);

  const handleTabChange = (tab) => {
    const getTabChange = data?.find((item) => item.name === tab);
    setTabChange(getTabChange);
  };
  return (
    <Wrapper>
      <div className="d-flex justify-content-center text-center align-content-center gap-3">
        {uniqName?.map((tab, i) => (
          <button
            className="btn btn-light"
            key={i}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {tabChange && (
        <div className="mt-4">
          <h2>{tabChange.name}</h2>
          <p>{tabChange.content}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
`;
