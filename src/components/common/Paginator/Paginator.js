import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginator.module.css";
import { onPageChanged } from "../../../features/users/userSlice";
import Preloader from "../../common/Preloader/Preloader";

const Paginator = () => {
	const pageSize = useSelector((state) => state.users.pageSize);
	const totalUsersCount = useSelector((state) => state.users.totalItemsCount);
	const page = useSelector((state) => state.users.page);
	const isFetching = useSelector((state) => state.users.isFetching);
	const portionSize = useSelector((state) => state.users.portionSize);

	const dispatch = useDispatch();

	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionNumber = portionNumber * portionSize;

	return (
		<div className={style.container}>
			{isFetching && <Preloader />}
         {portionNumber>1 &&<button className={style.buttonBack} onClick={()=>{setPortionNumber(portionNumber-1)}}>qqq</button>}
			<div className={style.aaa}>
				{pages.filter(p=>p>=leftPortionNumber&&p<=rightPortionNumber)
            .map((p) => {
					return (
						<span
                  key={p}
							onClick={() => {
								dispatch(onPageChanged(p));
							}}
							className={page === p && style.selectedPage}
						>
							{p}
						</span>
					);
				})}
			</div>
         {portionCount>portionNumber &&<button className={style.buttonNext} onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
		</div>
	);
};

export default Paginator;
