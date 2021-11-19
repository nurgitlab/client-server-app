import React from "react";
import "./InputBlock.css";


const defaultFlat = {
  id: null,
  flatName: "",
  waterCounterInfo: null,
  electDay: null,
  electNight: null,
  gasCounterInfo: null
};

export const InputBlock = () => {
  const [flatInfo, setFlatInfo] = React.useState(defaultFlat);

  const inputFlatInfo = (e) => {
    setFlatInfo({
      ...flatInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendInfoFromStateToServer = () => {
    setFlatInfo({
      ...flatInfo,
      id:
    })

    setFlatInfo(defaultFlat);
  };

  return (
    <div>
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
          defaultValue={flatInfo.flatName}
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
        />

        <div className={"label"}>
          Ночной тариф:
        </div>
        <input
          className={"input-style"}
          name={"electNight"}
          onChange={inputFlatInfo}
          type={"number"}
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
        />
      </div>

      <div
        className={"save-button"}
        onClick={sendInfoFromStateToServer}
      >
        Сохранить
      </div>


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

    </div>
  );
};