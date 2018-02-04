// tslint:disable
import { ToolNames } from './labeling-screen/segment-image';

export interface Annotation {
  id: string;
  color: string;
  bounds: {lat: number, lng:number}[];
  editing: boolean;
  toolName: ToolNames;
  toolId: string;
}

export type Tool = {
  id: string;
  name: string;
  color: string;
  tool: ToolNames;
};

export interface AppState {
  imageInfo: {url: string, height: number, width: number} | undefined;
  currentToolId: string | undefined;
  annotations: Annotation[];
  hiddenTools: string[];
  deletedAnnotations: Annotation[];
  loading: boolean;
  tools: Tool[];
  errorLoadingImage?: string;
}
