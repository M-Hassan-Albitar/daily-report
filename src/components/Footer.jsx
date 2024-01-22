function Footer() {
  return (
    <footer>
      <p
        style={{ fontSize: 20, fontWeight: "bold" }}
        className="text-center text-body-secondary"
      >
        © {new Date().getFullYear()} By M Hassan
      </p>
    </footer>
  );
}

export default Footer;
