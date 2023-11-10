import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Account } from '../../model/FinancialData';

interface SumByType {
    type: string;
    total: number;
}

interface DonutChartProps {
    data: Account[];
    width: number;
    height: number;
}

const StackedBarChart: React.FC<DonutChartProps> = ({ data, width, height }) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (data && ref.current) {
            const svg = d3.select(ref.current);
            svg.selectAll("*").remove();

            const sumByTypeArray: SumByType[] = Array.from(d3.group(data, (d: Account) => d.type))
                .map(([type, accounts]) => ({
                    type,
                    total: d3.sum(accounts, (account: Account) => account.balance.current)
                }));

            const xScale = d3.scaleLinear()
                .domain([0, d3.max(sumByTypeArray, (d: SumByType) => d.total)!])
                .range([0, width]);

            const yScale = d3.scaleBand()
                .domain(sumByTypeArray.map((d: SumByType) => d.type))
                .range([0, height])
                .padding(0.1);

            const colorScale = d3.scaleOrdinal(["#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373"]);

            svg.selectAll(".bar")
                .data(sumByTypeArray)
                .enter()
                .append("rect")
                .classed("bar", true)
                .attr("x", 0)
                .attr("y", (d: SumByType) => yScale(d.type)!)
                .attr("width", (d: SumByType) => xScale(d.total))
                .attr("height", yScale.bandwidth())
                .attr("fill", (d, i) => colorScale(i.toString()))
                .append("title")
                .text((d: SumByType) => `Type: ${d.type}\nTotal: $${d.total}`);
        }
    }, [data, height, width]);

    return <svg ref={ref} width={width} height={height}></svg>;
};

export default StackedBarChart;
