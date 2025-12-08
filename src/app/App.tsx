import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchUser, selectAuth } from "@features/auth/model/slice";
import { getCookie } from "@shared/lib/cookies";
import { AppRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);

  useEffect(() => {
    // При монтировании приложения проверяем наличие токена
    // Если токен есть, но пользователь не загружен, загружаем его
    const accessToken = getCookie("accessToken");
    if (accessToken && !user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
