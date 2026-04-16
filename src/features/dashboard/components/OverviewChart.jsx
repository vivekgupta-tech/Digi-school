import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts';
import { Skeleton } from '../../../core/components/Skeleton';
import useTheme from '../../../core/theme/useTheme';

const OverviewChart = ({ data = [], loading }) => {
  const { theme } = useTheme();

  if (loading) {
    return <Skeleton className="h-56 w-full" rounded="rounded-2xl" />;
  }

  return (
    <div className="bg-white dark:bg-night-bg-surface rounded-2xl border border-day-stroke-card dark:border-night-stroke-card p-4 md:p-5">
      <h3 className="text-sm font-semibold text-day-text-primary dark:text-night-text-primary mb-4">
        Attendance Overview
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="35%">
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={theme.border.divider}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: theme.text.tertiary, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: theme.text.tertiary, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            unit="%"
          />
          <Tooltip
            contentStyle={{
              background:   theme.bg.elevated,
              border:       `1px solid ${theme.border.card}`,
              borderRadius: '12px',
              color:        theme.text.primary,
              fontSize:     '12px',
            }}
            cursor={{ fill: theme.bg.surface2 }}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', color: theme.text.secondary }}
          />
          <Bar dataKey="present" name="Present %" fill={theme.brand.primary}     radius={[6, 6, 0, 0]} />
          <Bar dataKey="absent"  name="Absent %"  fill={theme.error.main}        radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;