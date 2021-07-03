export type LoadingState = "idle" | "loading";

export interface AsyncVar<T> {
  loading: LoadingState;
  error: string | null;
  data: T | null;
}
