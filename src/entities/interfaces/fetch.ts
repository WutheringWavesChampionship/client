export interface BaseFetchProps<T = undefined> {
  onSuccess?: (val?: T) => void;
  onError?: (err: unknown) => void;
  onFinally?: () => void;
}
