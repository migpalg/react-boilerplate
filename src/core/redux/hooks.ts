// @packages
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// @scripts
import { AppDispatch, RootState } from "./types";

/**
 * Use typed application dispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Use application typed selector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
