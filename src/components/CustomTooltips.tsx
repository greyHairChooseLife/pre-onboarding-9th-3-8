import { TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <div className="tooltip">
        <p className="title">{`${bar.payload.id}`}</p>
        <div>
          <p>
            {`${bar.dataKey} : `}
            <span className="bar_value">{`${bar.value}`}</span>
          </p>
          <p>
            {`${area.dataKey} : `}
            <span className="area_value">{`${area.value}`}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
