import { useEffect, useState } from "react";
import "./home.css"
import { GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import DataTable from "../../components/dataTable/DataTable";
import { depart } from "../../data";
import Department from "../../components/department/Department";
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User Id',
    width: 150,
    type: "string",
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 500,
    type: "string",
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 600,
    type: "string",
  }
];

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const items = JSON.parse(localStorage.getItem('growmeInfo') || '""');
    if (!items) {
      setLoading(false);
      navigate("/login", { state: { mess: "Please Login first!" } });
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
        if (data) {
          setData(data.data);
        }
      } catch (err) {
        setError("Oops! something went wrong while fetching the data 😔");
      }
      setLoading(false);
    }
    fetchData();
  }, [])


  return (
    <div>
      <Header slug="slug" />
      {
        loading ?
          <div className="loading"><CircularProgress /></div> :
          data ?
            <>
              <DataTable columns={columns} rows={data} />
              <div className="departmentContainer">
                <h2 className="departHeading">All Departments</h2>
                {depart?.map((item, index) => (
                  <Department item={item} key={index} />
                ))}
              </div>
            </> :
            <div className="errorMsg"> {error} </div>
      }
    </div>
  )
}

export default Home