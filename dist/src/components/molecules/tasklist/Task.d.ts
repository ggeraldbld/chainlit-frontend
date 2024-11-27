export interface ITask {
    title: string;
    status: 'ready' | 'running' | 'done' | 'failed';
    forId?: string;
}
export interface ITaskList {
    status: 'ready' | 'running' | 'done';
    tasks: ITask[];
}
export declare const Task: ({ index, task }: {
    index: number;
    task: ITask;
}) => JSX.Element;
