import { FileEventType } from "../fs/fileEventType";

// Class interfaces
export interface EventHandler {
  addEvents: () => void;
}

// Specification of socket payloads
export interface IUser {
  id: string;
}

export interface Chunk {
  source: string;
  progress: number;
  done: boolean;
  data: Buffer;
}

export interface IChunk {
  chunk: Chunk;
  room: IRoom;
}

export interface IPatch {
  room: IRoom;
  diffs: Diff.ParsedDiff[];
}

export interface IMessage {
  fromUser: IUser;
  targetUser: IUser;
  message: string;
}

export interface FileChange {
  event: FileEventType,
  relativePath: string,
  data?: Buffer,
}

export interface IFileChange {
  fileChange: FileChange,
  room: IRoom,
}

export interface IRoom {
  id: string;
  roomFolderPath: string;
  sourceFolderPath: string;
}
