declare module "@uwdata/vgplot" {
  export interface Plot {}
  export function plot(...args: any[]): Plot;
  export function rectY(data: any, options: any): any;
  export function from(table: string, options?: { filterBy?: any }): any;
  export function bin(column: string): any;
  export function count(): any;
  export function intervalX(options: { as: any }): any;
  export function xDomain(domain: any): any;
  export function marginLeft(value: number): any;
  export function width(value: number): any;
  export function height(value: number): any;
  export function xLabel(label: string): any;
  export function yLabel(label: string): any;
  export function vconcat(...plots: Plot[]): any;
  export const Fixed: any;

  export namespace Selection {
    export function crossfilter(): any;
  }

  export function coordinator(): any;
  export function wasmConnector(): any;
  export function loadParquet(name: string, url: string): any;
  export function sql(query: string): any;
  export function loadCSV(name: string, url: string): any;
  export function ruleX(...args: any[]): any;
  export function ruleY(...args: any[]): any;
  export function lineY(...args: any[]): any;
  export function text(...args: any[]): any;
  export function yGrid(...args: any[]): any;
  export function yTickFormat(...args: any[]): any;
  export function yLabel(...args: any[]): any;
  export function yDomain(...args: any[]): any;
  export function y(...args: any[]): any;
  export function xTickFormat(...args: any[]): any;
  export function xDomain(...args: any[]): any;
  export function xLabel(...args: any[]): any;
}
