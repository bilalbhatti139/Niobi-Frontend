import React, { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoachListRequest, updateLoading } from '../../../redux/reducers/ducks/UsersDuck';

const Coaches = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const { coachListResponse, isLoading } = useSelector(({ users }) => ({
    coachListResponse: users?.coachListResponse,
    isLoading: users?.isLoading
  }));

  const [coachList, setList] = useState([]);

  useEffect(() => {
    if (coachListResponse) {
      setList(coachListResponse);
    }
  }, [coachListResponse]);

  useEffect(() => {
    dispatch(updateCoachListRequest());
    dispatch(updateLoading(true));
  }, [dispatch]);

  console.log(coachList);

  return (
    <>
      <div className="bg-white  my-3 ">
        <ul className="pt-3 mx-6 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {data.map((coach) => (
            <li key={coach.name}>
              <div className="space-y-4 relative">
                <div className="aspect-w-3 aspect-h-2">
                  <span className="m-4 flex items-center justify-center	absolute top-0 right-0 h-10 w-10 overflow-hidden rounded-full bg-white hover:bg-gradient-to-r from-[#DB398E] to-[#62277C] ">
                    <BiHeart
                      className="hover:fill-white active:fill-white"
                      size={24}
                      fill="#C01A68"
                    />
                  </span>
                  <img className="object-cover shadow-md" src={coach.imageUrl} alt="" />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-2xl	text-gray-900 leading-8 font-medium">{coach.name}</h3>
                    <div className="h-16">
                      <p className="text-gray-500 text-base leading-5 font-normal">{coach.role}</p>
                    </div>
                  </div>
                  <ul className="pb-8">
                    <li>
                      <div className="row text-gray-500 text-sm border-t-2 py-2 leading-5 font-normal">
                        {coach.yearsOfExp}
                      </div>
                    </li>
                    <span className=" ml-0 items-center bg-pink-100 px-2.5 py-0.5 text-sm font-medium text-pink-800">
                      {coach.match}
                    </span>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Coaches;
