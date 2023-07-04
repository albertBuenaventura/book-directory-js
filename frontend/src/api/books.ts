import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import type { File } from "../containers/Directory/Directory";

const api_base_url = 'http://localhost:8081/api/v1';

export type GetBooksResponse = File[];

export async function getBooks(id?: number) {
  const res = await axios.get<GetBooksResponse>(`${api_base_url}/books/${id ?? ''}`);

  return res.data;
}

export function useBooks(id?: number) {
  return useQuery<GetBooksResponse, AxiosError>(
    ["books", id],
    () => getBooks(id)
  );
}
