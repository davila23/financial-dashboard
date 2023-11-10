import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Account } from '../../model/FinancialData';

interface PieChartProps {
    data: Account[];
    width: number;
    height: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, width, height }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (data && ref.current) {
            const svg = d3.select(ref.current);
            svg.selectAll("*").remove();

            const totalBalance = data.reduce((sum, account) => sum + account.balance.current, 0);
            const radius = Math.min(width, height) / 2;
            const arc = d3.arc().innerRadius(0).outerRadius(radius);
            const pie = d3.pie<Account>().value(d => d.balance.current);
            const arcs = pie(data);

            const colorScale = d3.scaleOrdinal(["#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373"]);

            svg.attr("width", width)
               .attr("height", height)
               .append("g")
               .attr("transform", `translate(${width / 2}, ${height / 2})`)
               .selectAll("path")
               .data(arcs)
               .enter()
               .append("path")
               .attr("fill", (d, i) => colorScale(i.toString()))
               .attr("d", arc as any)
               .append("title")
               .text(d => {
                   const percentage = (d.data.balance.current / totalBalance * 100).toFixed(2);
                   return `Name: ${d.data.name}\nBalance: $${d.data.balance.current}\nType: ${d.data.type}\nPercentage: ${percentage}%`;
               });
        }
    }, [data, width, height]);

    return <svg ref={ref} width={width} height={height}></svg>;
};

export default PieChart;
