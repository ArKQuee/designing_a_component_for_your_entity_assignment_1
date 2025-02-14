// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHjJUelWMDshsG6GIH8-Iw8l2Ktc6NyyPdQBRNeDANFP3ANUhW1vlU3_oerTmCulpdOK5GRcipsbVFQ4pSIg_hDRwMs5rHK1PlDO7jdA"; // Placeholder image
  const name = "Sachin Tendulkar";
  const email = "sachinten@example.com";
  const phone = "+1 (555) 123-4567";
  const address = "123 Main St, Springfield, USA";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.info}><strong>Email:</strong> {email}</p>
        <p style={styles.info}><strong>Phone:</strong> {phone}</p>
        <p style={styles.info}><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px auto",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    margin: "0",
    fontSize: "20px",
    color: "#333",
  },
  info: {
    margin: "5px 0",
    fontSize: "14px",
    color: "#555",
  },
};

export default Usercard;
