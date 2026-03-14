import { useState, useMemo} from "react";

interface PaginationResult<T> {
    currentPage: number;
    totalPages: number;
    paginatedData: T[];
    totalItems: number;
    startItem: number;
    endItem: number;
    nextPage: ()=> void;
    prevPage: ()=> void;
    goToPage: (page: number) => void;
}

export function usePagination<T>(
    data: T[],
    itemsPerPage: number = 10
): PaginationResult<T> {
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = data.length;
    const totalPages = Math.ceil(data.length/ itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;

    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    const nextPage = () => {
        setCurrentPage((p) => Math.min(p + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((p) => Math.max(p -1, 1));
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages){ 
            setCurrentPage(page);
        }
    };

    return {
        currentPage,
        totalPages,
        paginatedData,
        totalItems,
        startItem,
        endItem,
        nextPage,
        prevPage,
        goToPage,
    };
}