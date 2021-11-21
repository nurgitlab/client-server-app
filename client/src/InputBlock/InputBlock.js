import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import { CREATE_FLAT } from "../mutations/flat";
import { GET_ALL_FLATS } from "../query/flat";
import "./InputBlock.css";


const defaultFlat = {
  flatName: "",
  waterCounterInfo: "",
  electDay: "",
  electNight: "",
  gasCounterInfo: ""
};

export const InputBlock = () => {
  const [flatInfo, setFlatInfo] = React.useState(defaultFlat);

  const [flats, setFlats] = React.useState([]);

  const {data, loading, error, refetch} = useQuery(GET_ALL_FLATS, {pollInterval: 50000});
  const [newFlat] = useMutation(CREATE_FLAT);

  React.useEffect(() => {
    if (!loading) {
      setFlats(data.getAllFlats);
    }
  }, [data]);

  const getAll = e => {
    e.preventDefault();
    refetch();
  };

  if (loading) {
    return (
      <div className={"container"}>
        Loading ...
      </div>
    );
  }

  const inputFlatInfo = (e) => {
    e.preventDefault();
    setFlatInfo({
      ...flatInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendInfoFromStateToServer = () => {
    newFlat({
      variables: {
        input: flatInfo
      }
    }).then(({data}) => {
      console.log(data);
      setFlatInfo(defaultFlat);
    });
  };

  return (
    <div>
      <form>
        <div className={"title"}>
          Показание счётчиков:
        </div>

        <div className={"container"}>
          <div className={"label"}>
            Квартира:
          </div>
          <input
            className={"input-style"}
            name={"flatName"}
            onChange={inputFlatInfo}
            value={flatInfo.flatName}
          />
        </div>

        <div className={"container"}>
          <div className={"label"}>
            Показания счётчика воды:
          </div>
          <input
            className={"input-style"}
            name={"waterCounterInfo"}
            onChange={inputFlatInfo}
            type={"number"}
            value={flatInfo.waterCounterInfo}
          />
        </div>

        <div className={"container"}>
          <div className={"label"}>
            Показания счётчиков электричества:
          </div>
          <div className={"label"}>
            Дневной тариф:
          </div>
          <input
            className={"input-style"}
            name={"electDay"}
            onChange={inputFlatInfo}
            type={"number"}
            value={flatInfo.electDay}
          />

          <div className={"label"}>
            Ночной тариф:
          </div>
          <input
            className={"input-style"}
            name={"electNight"}
            onChange={inputFlatInfo}
            type={"number"}
            value={flatInfo.electNight}
          />
        </div>

        <div className={"container"}>
          <div className={"label"}>
            Показания счётчика газа:
          </div>
          <input
            className={"input-style"}
            name={"gasCounterInfo"}
            onChange={inputFlatInfo}
            type={"number"}
            value={flatInfo.gasCounterInfo}
          />
        </div>

        <div
          className={"save-button"}
          onClick={sendInfoFromStateToServer}
        >
          Сохранить
        </div>
      </form>

      <div className={"container"}>
        <div className={"label"}>
          {flatInfo.flatName}
        </div>
        <div className={"label"}>
          {flatInfo.waterCounterInfo}
        </div>
        <div className={"label"}>
          {flatInfo.electDay}
        </div>
        <div className={"label"}>
          {flatInfo.electNight}
        </div>
        <div className={"label"}>
          {flatInfo.gasCounterInfo}
        </div>
      </div>

      <div
        className={"save-button"}
        onClick={getAll}
      >
        Получить
      </div>

      <div>
        {flats.map((showFlatInfo) => {
          return (
            <div
              className={"container"}
              key={showFlatInfo.id}
            >
              <div className={"label"}>
                id| {showFlatInfo.id}
              </div>
              <div className={"label"}>
                Наименование квартиры| {showFlatInfo.flatName}
              </div>
              <div className={"label"}>
                Счётчик воды| {showFlatInfo.waterCounterInfo}
              </div>
              <div className={"label"}>
                Дневной свет| {showFlatInfo.electDay}
              </div>
              <div className={"label"}>
                Ночной свет| {showFlatInfo.electNight}
              </div>
              <div className={"label"}>
                Счётчик газа| {showFlatInfo.gasCounterInfo}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};