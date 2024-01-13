// import axios from "axios";
import { useState, useEffect } from "react";
// import React {useState} from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./Ttable.css"
const Table = () => {
	const [getStudent, setGetStudent] = useState([]); //--------
	// const [getClient, setGetClient] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://gwc-tech-school-africa.onrender.com/api/v1/wait-lists"
			);
			const data = await response.json();
			console.log(data);
			setGetStudent(data?.data);
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	// useEffect(() => {
	//   fetchClient();
	// }, []);

	return (
		<Twrapper>
			<div className="client-header">
				<span className="spanA">Students</span>
				<span className="p">
					The list below consist of all the Students on the platform
				</span>
			</div>
			<table>
				<thead>
					<tr>
						<th style={{ display: "flex" }}>Client_ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Date Joined</th>
						<th></th>
					</tr>
				</thead>
				{getStudent?.map((e) => {
					return (
						<>
							<tr key={e?._id}>
								<td style={{ borderRight: "1.4px solid #f5f5f5" }}>{e?._id}</td>
								<td style={{ borderRight: "1.4px solid #f5f5f5" }}>
									{e?.email}
								</td>
								<td style={{ borderRight: "1.4px solid #f5f5f5" }}>
									{e.email}
								</td>

								<td>
									{e.success === "true" ? (
										<div
											style={{
												background:
													e.success === "true" ? "#e1eee1" : "#fbe7e8",
												color: e.success === "true" ? "#004d00" : "#fbe7e8",
												display: "flex",
												borderRadius: "5px",
												margin: "12px",
												padding: "4px 4px",
												justifyContent: "center",
												borderRight: "2px solid #f5f5f5",
											}}>
											Active
										</div>
									) : (
										<div
											style={{
												background:
													e?.success === "false" ? "#e1eee1" : "#fbe7e8",
												color: e?.success === "false" ? "#026902" : "#fbe7e8",
												display: "flex",
												borderRadius: "5px",
												margin: "12px",
												padding: "4px 4px",
												justifyContent: "center",
												borderRight: "2px solid #f5f5f5",
											}}>
											In-active
										</div>
									)}
								</td>
								<td style={{ borderLeft: "1.2px solid #f5f5f5" }}>
									{new Date(e?.createdAt).toLocaleString("en")}
								</td>
								{/* <Link
                  to="/clientpage"
                  onClick={() => {
                    sessionStorage.setItem("clientID", e?.userId);
                    console.log(e);
                    // check(false);
                  }}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    background: "#28D1FF",
                    borderRadius: "4px",
                    border: "1px solid #28D1FF",
                    color: "#FFF",
                    marginTop: "16px",
                    padding: "2px ",
                    fontSize: "12px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <td
                    style={{
                      paddingBlock: "4px",
                    }}
                  >
                    View
                  </td>
                </Link> */}
							</tr>
						</>
					);
				})}
			</table>
		</Twrapper>
	);
};

const Twrapper = styled.div`
	table {
		border-collapse: collapse;
		font-size: 11.5px;
		width: 100%;
	}
	table th {
		font-weight: 500;
		text-align: left;
		font-size: 10px;
		padding: 12px;
		/* margin-block-end: 10px; */
		color: #fff;
		background-color: #425ce8;
		// background-color: #28d1ff;
	}
	table tr:nth-child(odd) {
		background-color: #f6f6f6;
	}
	table td {
		padding: 10px;
		font-weight: 500;
		font-size: 11px;
	}
	table td a {
		text-decoration: none;
	}
	.client-header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-bottom: 1.3px solid #f5f5f5;
		padding: 20px;
	}
	.client-header .spanA {
		font-weight: 600;
		font-size: 20px;
	}
	.client-header .p {
		font-size: 10px;
	}
`;

export default Table;
