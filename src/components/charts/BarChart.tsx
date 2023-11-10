import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Account } from '../../model/FinancialData';

interface BarChartProps {
    data: Account[];
    width: number;
    height: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (data && d3Container.current) {
            const svg = d3.select(d3Container.current);
            svg.selectAll("*").remove();

            const xScale = d3.scaleBand()
                .domain(data.map(d => d.name))
                .rangeRound([0, width])
                .padding(0.1);

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.balance.current)!])
                .range([height, 0]);

            const colorScale = d3.scaleOrdinal<string>()
                .domain(data.map(d => d.name))
                .range(["#d3d3d3", "#a9a9a9", "#808080", "#696969", "#505050"]);

            svg.append('g')
                .call(d3.axisBottom(xScale))
                .attr('transform', `translate(0, ${height})`)
                .attr('color', '#6c757d');

            svg.append('g')
                .call(d3.axisLeft(yScale))
                .attr('color', '#6c757d');

            const bars = svg.selectAll(".bar")
                .data(data)
                .enter()
                .append('g');

            bars.append('rect')
                .classed('bar', true)
                .attr('x', d => xScale(d.name)!)
                .attr('y', d => yScale(d.balance.current))
                .attr('width', xScale.bandwidth())
                .attr('height', d => height - yScale(d.balance.current))
                .attr('fill', d => colorScale(d.name))
                .append('title')
                .text(d => `${d.name}: $${d.balance.current}`);

            bars.append('text')
                .attr('x', d => xScale(d.name)! + xScale.bandwidth() / 2)
                .attr('y', d => yScale(d.balance.current) - 5)
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .text(d => `$${d.balance.current}`);
        }
    }, [data, height, width]);

    return (
        <svg
            className="d3-component"
            width={width}
            height={height}
            ref={d3Container}
        />
    );
};

export default BarChart;
