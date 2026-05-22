import { AppLayout } from "./components/Layout/AppLayout";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;