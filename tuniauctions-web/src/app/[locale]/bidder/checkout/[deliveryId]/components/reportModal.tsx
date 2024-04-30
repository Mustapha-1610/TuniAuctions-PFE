"use client";
import { DeliveryType } from "@/models/types/delivery";
import { Button, Form, Input, Modal, Spin } from "antd";
import { ObjectId } from "mongoose";
import { useState } from "react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { handleMultipleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { LoadingOutlined } from "@ant-design/icons";

interface Props {
  deliveryId: ObjectId;
  setReportModalState: (value: boolean) => void;
  isReportModalOpen: boolean;
  setDeliveryData: (value: DeliveryType) => void;
}

export default function ReportModal({
  deliveryId,
  isReportModalOpen,
  setReportModalState,
  setDeliveryData,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadChangeParam["fileList"]>([]);

  const handleUpload = ({ fileList: newFileList }: UploadChangeParam) => {
    setFileList(newFileList);
  };
  const handleReportSubmit = async (values: any) => {
    setLoading(true);
    const files = new DataTransfer();
    fileList.forEach((file) => {
      if (file.originFileObj) {
        files.items.add(file.originFileObj);
      }
    });
    let urls: string[] = [];
    if (files.files.length > 0) {
      urls = await handleMultipleFirebaseImageUpload(
        files.files,
        "bidder/ReportAttachements/"
      );
    }

    const res = await fetch("/api/bidder/submitDeliveryReport", {
      method: "PUT",
      body: JSON.stringify({
        deliveryId,
        subject: values.subject,
        description: values.description,
        attachments: urls,
      }),
    });

    const resData = await res.json();
    setLoading(false);
    if (resData.success) {
      setDeliveryData(resData.delivery);
      setReportModalState(false);
    } else {
      setReportModalState(false);
    }
  };
  return (
    <>
      <Modal
        title="Submit Report"
        centered
        open={isReportModalOpen}
        width={800}
        onCancel={() => setReportModalState(false)}
        footer={null}
      >
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          <Form layout="vertical" onFinish={handleReportSubmit}>
            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please enter a subject" }]}
            >
              <Input placeholder="Enter subject" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter a description" },
              ]}
            >
              <Input.TextArea
                placeholder="Enter description"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item label="Attachments (Optional)">
              <Upload
                multiple
                fileList={fileList}
                onChange={handleUpload}
                beforeUpload={() => false} // Prevent default upload behavior
              >
                <Button icon={<UploadOutlined />}>Select Images</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                danger
                loading={loading}
                style={{ marginRight: 10 }}
              >
                Submit
              </Button>
              <Button onClick={() => setReportModalState(false)}>Cancel</Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}
