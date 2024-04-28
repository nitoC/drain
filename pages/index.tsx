export default function Home() {
  window.location = (window.location.origin + '/home.html') as
    | Location
    | (string & Location);

  return (
    <div className={''}>
      <main
        style={{
          minHeight: '100vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="spinner"></div>
      </main>
    </div>
  );
}
