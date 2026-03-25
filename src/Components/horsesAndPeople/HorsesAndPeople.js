import React, { useState } from 'react'
import { Tab, Table, Tabs, Form, InputGroup } from 'react-bootstrap'
import './HorsesAndPeople.css'

const horseHeaders = [
  "Rank", "Horse Name", "Age", "Sex", "Breed", "Races", "Wins", "Non-winning prizes", "Earnings", "Owner premiums", "Earnings and Premiums", "Earnings/Race", "Rating"
];

const ownerHeaders = [
  "Rank", "Owners", "Horses", "Runners", "Wins", "Non-winning prizes", "Earnings", "Owner premiums", "Earnings and Premiums", "Breeder's Premium", "Earnings/Runner", "Earnings/Horse", "Runs/Horse"
];

const trainerHeaders = [
  "Rank", "Trainers", "Horses", "Runners", "Wins", "Non-winning prizes", "Earnings", "Owner premiums", "Earnings and Premiums", "Breeder's Premium", "Earnings/Runner", "Earnings/Horse", "Runs/Horse"
];

const jockeysHeaders = [
  "Rank", "Trainers", "Horses", "Runners", "Wins", "Non-winning prizes", "Earnings", "Owner premiums", "Earnings and Premiums", "Breeder's Premium", "Earnings/Runner", "Earnings/Horse", "Runs/Horse"
];

const mockHorsesData = [
  { id: 1, rank: 1, horseName: "Desert Star", age: 2, sex: "M", breed: "Arabian", races: 4, wins: 4, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", earningsPerRace: "300,000", rating: 100 },
  { id: 2, rank: 2, horseName: "Sand Storm", age: 3, sex: "F", breed: "Arabian", races: 6, wins: 3, nonWinningPrizes: 2, earnings: "850,000", ownerPremiums: 50000, earningsAndPremiums: "900,000", earningsPerRace: "141,666", rating: 95 },
  { id: 3, rank: 3, horseName: "Oasis Queen", age: 4, sex: "F", breed: "Arabian", races: 12, wins: 8, nonWinningPrizes: 3, earnings: "2,500,000", ownerPremiums: 200000, earningsAndPremiums: "2,700,000", earningsPerRace: "208,333", rating: 110 },
  { id: 4, rank: 4, horseName: "Falcon Swift", age: 3, sex: "G", breed: "Arabian", races: 8, wins: 2, nonWinningPrizes: 4, earnings: "450,000", ownerPremiums: 20000, earningsAndPremiums: "470,000", earningsPerRace: "56,250", rating: 88 },
  { id: 5, rank: 5, horseName: "Dune Runner", age: 5, sex: "M", breed: "Arabian", races: 15, wins: 5, nonWinningPrizes: 7, earnings: "1,100,000", ownerPremiums: 80000, earningsAndPremiums: "1,180,000", earningsPerRace: "73,333", rating: 92 },
  { id: 6, rank: 6, horseName: "Golden Mane", age: 2, sex: "F", breed: "Arabian", races: 3, wins: 1, nonWinningPrizes: 1, earnings: "200,000", ownerPremiums: 10000, earningsAndPremiums: "210,000", earningsPerRace: "66,666", rating: 85 },
  { id: 7, rank: 7, horseName: "Sky Dancer", age: 4, sex: "M", breed: "Arabian", races: 10, wins: 4, nonWinningPrizes: 2, earnings: "950,000", ownerPremiums: 60000, earningsAndPremiums: "1,010,000", earningsPerRace: "95,000", rating: 98 },
  { id: 8, rank: 8, horseName: "Velvet Spirit", age: 3, sex: "F", breed: "Arabian", races: 7, wins: 2, nonWinningPrizes: 3, earnings: "380,000", ownerPremiums: 15000, earningsAndPremiums: "395,000", earningsPerRace: "54,285", rating: 87 },
  { id: 9, rank: 9, horseName: "Iron Will", age: 6, sex: "G", breed: "Arabian", races: 20, wins: 6, nonWinningPrizes: 10, earnings: "1,400,000", ownerPremiums: 100000, earningsAndPremiums: "1,500,000", earningsPerRace: "70,000", rating: 94 },
  { id: 10, rank: 10, horseName: "Silent Night", age: 2, sex: "M", breed: "Arabian", races: 2, wins: 1, nonWinningPrizes: 1, earnings: "150,000", ownerPremiums: 5000, earningsAndPremiums: "155,000", earningsPerRace: "75,000", rating: 84 },
  { id: 11, rank: 11, horseName: "Brave Heart", age: 4, sex: "G", breed: "Arabian", races: 14, wins: 3, nonWinningPrizes: 6, earnings: "680,000", ownerPremiums: 40000, earningsAndPremiums: "720,000", earningsPerRace: "48,571", rating: 89 },
  { id: 12, rank: 12, horseName: "Pearl Shell", age: 3, sex: "F", breed: "Arabian", races: 5, wins: 2, nonWinningPrizes: 2, earnings: "420,000", ownerPremiums: 25000, earningsAndPremiums: "445,000", earningsPerRace: "84,000", rating: 91 },
];

const ownerData = [
  { id: 1, rank: 1, horseName: "Desert Star", age: 2, sex: "M", breed: "", races: 4, wins: 4, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", earningsPerRace: "1,200,000", rating: 100 },
]

const trainerData = [
  { id: 1, rank: 1, owner: "hsdghcgwuye", horse: "jysd", runner: "", wins: 3, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", breederPremium: 0, earningsRunner: 120000, earningsHorse: "1,200,000", runsHorse: 120000 },
  { id: 2, rank: 1, owner: "hsdghcgwuye", horse: "jysd", runner: "", wins: 3, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", breederPremium: 0, earningsRunner: 120000, earningsHorse: "1,200,000", runsHorse: 120000 },
  { id: 3, rank: 1, owner: "hsdghcgwuye", horse: "jysd", runner: "", wins: 3, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", breederPremium: 0, earningsRunner: 120000, earningsHorse: "1,200,000", runsHorse: 120000 },
  { id: 4, rank: 1, owner: "hsdghcgwuye", horse: "jysd", runner: "", wins: 3, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", breederPremium: 0, earningsRunner: 120000, earningsHorse: "1,200,000", runsHorse: 120000 },
  { id: 5, rank: 1, owner: "hsdghcgwuye", horse: "jysd", runner: "", wins: 3, nonWinningPrizes: 0, earnings: "1,200,000", ownerPremiums: 0, earningsAndPremiums: "1,200,000", breederPremium: 0, earningsRunner: 120000, earningsHorse: "1,200,000", runsHorse: 120000 },
]

const DynamicTable = ({ headers, data }) => (
  <div className="table-responsive custom-table-scroll">
    <Table hover className="custom-dynamic-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? data.map((row) => (
          <tr key={row.id}>
            {Object.keys(row).filter(key => key !== 'id').map((key, index) => (
              <td key={index}>{row[key]}</td>
            ))}
          </tr>
        )) : (
          <tr>
            <td colSpan={headers.length} className="text-center py-4 text-muted">No data found</td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
);

const PaginationUI = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="custom-pagination mt-4 d-flex justify-content-center align-items-center gap-2">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {pages.map(page => (
        <button
          key={page}
          className={`pagination-number ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

const TabContentWrapper = ({ title, subTitle, headers, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val !== null && val !== undefined && val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top of table or container when page changes
    const container = document.querySelector('.horses-and-people-container');
    if (container) {
      window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
    }
  };

  // Reset page to 1 when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="tab-pane-content">
      <div className="tab-header-section mb-4">
        <h2 className="tab-title text-capitalize">{title}</h2>
        <p className="tab-subtitle text-muted">{subTitle}</p>
      </div>

      <div className="search-filter-section mb-4">
        <InputGroup className="search-input-group">
          <Form.Control
            placeholder={`Enter ${title.toLowerCase()} name`}
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <InputGroup.Text className="search-icon-bg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>

      <DynamicTable headers={headers} data={paginatedData} />

      <PaginationUI
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

function HorsesAndPeople() {
  return (
    <div className="horses-and-people-container">
      <Tabs
        defaultActiveKey="horses"
        id="horses-people-tabs"
        className="mb-4 custom-tabs-style"
        justify
      >
        <Tab eventKey="horses" title="Horses">
          <TabContentWrapper
            title="Horses"
            subTitle="Horse’s profile and standings"
            headers={horseHeaders}
            data={mockHorsesData}
          />
        </Tab>
        <Tab eventKey="owners" title="Owners">
          <TabContentWrapper
            title="Owners"
            subTitle="Here you will find the racehorse owners' honours list."
            headers={ownerHeaders}
            data={ownerData}
          />
        </Tab>
        <Tab eventKey="trainers" title="Trainers">
          <TabContentWrapper
            title="Trainers"
            subTitle="Here you will find the racehorse trainers' honours list."
            headers={trainerHeaders}
            data={trainerData}
          />
        </Tab>
        <Tab eventKey="jockeys" title="Jockeys">
          <TabContentWrapper
            title="Jockeys"
            subTitle="Here you will find the jockeys' honours list."
            headers={jockeysHeaders}
            data={trainerData}
          />
        </Tab>
      </Tabs>
    </div>
  )
}

export default HorsesAndPeople