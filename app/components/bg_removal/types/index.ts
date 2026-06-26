export type BgJobStatus = 'queued' | 'processing' | 'done' | 'error';

export interface BgJob {
  id: string;
  file: File;
  fileName: string;
  originalUrl: string;
  resultUrl: string | null;
  status: BgJobStatus;
  progress: number;
  errorMessage?: string;
}
