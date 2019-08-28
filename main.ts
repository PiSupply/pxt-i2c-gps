/*
* pxt-i2c-gps , Micro:Bit library for I2C GPS Module for use with IoT LoRa Nodes
* Copyright (C) 2019  Pi Supply

* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
* Last Updated 2019-08-25
*/


//% weight=8 color=#8bc34a icon="\uf0ac"


namespace i2cgps {



    //%blockId="i2cgps_latitude"
    //%block="Latitude from GPS"
    export function latitude(): number {
        /**
         * Return Latitude
         */
         pins.i2cWriteNumber(
          66,
          1,
          NumberFormat.Int8LE,
          false
          )
          let lat = pins.i2cReadNumber(66, NumberFormat.Float32LE, false)
          return lat;
    }

    //%blockId="i2cgps_longitude"
    //%block="Longitude from GPS"
    export function longitude(): number {
        /**
         * Return Longitude
         */
         pins.i2cWriteNumber(
          66,
          2,
          NumberFormat.Int8LE,
          false
          )
          let lat = pins.i2cReadNumber(66, NumberFormat.Float32LE, false)
          return lat;


    }

    //%blockId="i2cgps_altitude"
    //%block="Altitude from GPS"
    export function altiude(): number {
        /**
         * Return Altitude
         */
         pins.i2cWriteNumber(
          66,
          3,
          NumberFormat.Int8LE,
          false
          )
          let lat = pins.i2cReadNumber(66, NumberFormat.Float32LE, false)
          return lat;


    }



}
