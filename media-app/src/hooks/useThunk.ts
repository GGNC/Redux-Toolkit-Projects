import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

function useThunk<T, U>(thunk: (arg: U) => AsyncThunkAction<T, U, object>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const runThunk = useCallback((arg: U) => {
    setIsLoading(true);
    dispatch(thunk(arg))
      .unwrap()  
      .catch((err: Error) => setError(err))  
      .finally(() => setIsLoading(false));  
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error] as const;
}

export default useThunk;
