export default interface UniqueItem {
    id: string,

    collectionId: string;
    itemId: string;
    itemIdNumber: number;
    metadataURI: string;

    // owner
    platform: string;
    userId: string;
}