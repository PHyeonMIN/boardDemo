package com.example.boarddemo.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.boarddemo.mapper.BoardMapper;

import com.example.boarddemo.vo.BoardVO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;
    private String UPLOAD_PATH = "C:\\Users\\yeoboya\\git\\boardDemo\\front\\public\\upload";

    // Create
    public void createBoard(String jwtToken,String boardInfo, MultipartFile file) {
        String token = jwtToken.substring(7);
        String m_seq =
                JWT.require(Algorithm.HMAC512("cos"))
                        .build().verify(token).getClaim("m_seq").asString();
        try {
            BoardVO boardvo = new ObjectMapper().readValue(boardInfo, BoardVO.class);

            registFile(file, boardvo);
            boardvo.setM_seq(Integer.parseInt(m_seq));

            boardMapper.createBoard(boardvo);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    // Read
    public List<BoardVO> readBoard() {
        return boardMapper.readBoard();
    }

    // Update
    public void updateBoard(String boardInfo, MultipartFile file)  {
        try {
            BoardVO boardVO = new ObjectMapper().readValue(boardInfo, BoardVO.class);
            BoardVO DBconfirm = boardMapper.readDetail(boardVO.getB_seq());
            File fileConfirm = new File(UPLOAD_PATH+"\\"+DBconfirm.getB_fileName());
            if(fileConfirm.exists()){
                fileConfirm.delete();
            }
            registFile(file, boardVO);
            boardMapper.updateBoard(boardVO);

        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Delete
    public void deleteBoard(BoardVO boardVO) {
        File file = new File(UPLOAD_PATH+"\\"+boardVO.getB_fileName());
        if(file.exists()){
            file.delete();
        }
        boardMapper.deleteBoard(boardVO.getB_seq());
    }



    // ?????? ?????? ?????????
    public void registFile(MultipartFile file, BoardVO boardvo){
        try {
            // ?????? ????????? ?????? ?????? ????????? ????????? ????????? ??????
            String fileId =
                    (new Date().getTime()) + "" + (new Random().ints(1000, 9999)
                            .findAny().getAsInt());

            // ?????? ???????????? ex) ??????.jpg
            String originName = file.getOriginalFilename();
            // ?????? ????????? ex) jpg
            String fileExtension = originName.substring(originName.lastIndexOf("."));
            // ?????? ????????? ex) ??????
            /// String onlyName = originName.substring(0, originName.lastIndexOf("."));
            // ?????? ?????????
            // long fileSize = file.getSize();

            // ????????? ????????? + ???????????? ??????
            File fileSave = new File(UPLOAD_PATH, fileId + "." + fileExtension);
            if (!fileSave.exists()) {
                fileSave.mkdirs();
            }
            // fileSave????????? ????????? ??????
            file.transferTo(fileSave);

            boardvo.setB_fileOriginName(originName);
            boardvo.setB_fileName(fileId+"."+fileExtension);
        }catch (IOException e){
            e.printStackTrace();
        }

    }


}
