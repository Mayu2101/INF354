export class FileSelectionModel{
    constructor(
        public fileName: string,
        public image: string | ArrayBuffer | null,
        public dateTime: Date
    ) {}
}