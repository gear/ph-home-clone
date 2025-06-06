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
}
