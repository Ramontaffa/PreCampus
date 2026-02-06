/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { HeaderContext } from "../contexts/HeaderContext";
import type { User } from "../types/User";
import Header from "../components_temp/HeaderMenu/Header";

const MainLayout = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  const location = useLocation();

  const hideHeaderRoutes = ["/login", "/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await axios.get("/auth/profile");
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  async function updateUser(data: Partial<User>) {
    await axios.patch("/users/me", data);
    await refreshUser();
  }

  async function refreshUser() {
    const { data } = await axios.get("/auth/profile");
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, refreshUser, updateUser }}>
      <HeaderContext.Provider value={{ title, setTitle }}>
        {!shouldHideHeader && user && <Header />}

        <Outlet />
      </HeaderContext.Provider>
    </AuthContext.Provider>
  );
};

export default MainLayout;
